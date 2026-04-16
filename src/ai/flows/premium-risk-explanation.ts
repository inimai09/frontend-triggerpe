'use server';
/**
 * @fileOverview A Genkit flow for explaining premium calculations and risk profiles.
 *
 * - premiumRiskExplanation - A function that handles the explanation process.
 * - PremiumRiskExplanationInput - The input type for the premiumRiskExplanation function.
 * - PremiumRiskExplanationOutput - The return type for the premiumRiskExplanation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PremiumRiskExplanationInputSchema = z.object({
  baseRate: z.number().describe('The base rate for the premium.'),
  zoneSurcharge: z.number().describe('Surcharge based on the operational zone.'),
  platformLoading: z
    .number()
    .describe('Loading factor based on the delivery platform.'),
  riskLoading: z.number().describe('Loading factor based on individual risk assessment.'),
  weatherLoading: z
    .number()
    .describe('Loading factor based on current and forecasted weather conditions.'),
  totalPremium: z.number().describe('The total weekly premium calculated.'),
  riskScore: z.number().describe('The individual risk score out of 100.'),
  riskLevel: z.string().describe('The categorized risk level (e.g., LOW, MEDIUM, HIGH).'),
  zone: z.string().describe('The operational zone (e.g., HIGH (Chennai)).'),
  platform: z.string().describe('The delivery platform the worker operates on (e.g., Zomato).'),
});
export type PremiumRiskExplanationInput = z.infer<
  typeof PremiumRiskExplanationInputSchema
>;

const PremiumRiskExplanationOutputSchema = z.object({
  explanation: z
    .string()
    .describe('A plain-English, bullet-point explanation of the premium calculation and risk profile.'),
});
export type PremiumRiskExplanationOutput = z.infer<
  typeof PremiumRiskExplanationOutputSchema
>;

export async function premiumRiskExplanation(
  input: PremiumRiskExplanationInput
): Promise<PremiumRiskExplanationOutput> {
  return premiumRiskExplanationFlow(input);
}

const premiumRiskExplanationPrompt = ai.definePrompt({
  name: 'premiumRiskExplanationPrompt',
  input: {schema: PremiumRiskExplanationInputSchema},
  output: {schema: PremiumRiskExplanationOutputSchema},
  prompt: `You are an AI expert specializing in explaining insurance premium calculations and risk profiles in simple, plain English to delivery workers. Your goal is to make complex financial concepts easy to understand.

Here is the data for a delivery worker's premium calculation and risk profile:

Total Weekly Premium: ₹{{{totalPremium}}}

Premium Breakdown:
- Base rate: ₹{{{baseRate}}}
- Zone surcharge: ₹{{{zoneSurcharge}}}
- Platform loading: ₹{{{platformLoading}}}
- Risk loading: ₹{{{riskLoading}}}
- Weather loading: ₹{{{weatherLoading}}}

Risk Profile:
- Risk score: {{{riskScore}}}/100
- Risk level: {{{riskLevel}}}
- Zone: {{{zone}}}
- Platform: {{{platform}}}

Please provide a clear, bullet-point explanation that addresses the following:
1.  How the total weekly premium is calculated, briefly explaining each component (base rate, zone surcharge, platform loading, risk loading, weather loading).
2.  What the risk score signifies and how the risk level, zone, and platform contribute to it, and ultimately, to the premium.

Ensure the explanation is easy to read, uses simple language, and is formatted as bullet points.`,
});

const premiumRiskExplanationFlow = ai.defineFlow(
  {
    name: 'premiumRiskExplanationFlow',
    inputSchema: PremiumRiskExplanationInputSchema,
    outputSchema: PremiumRiskExplanationOutputSchema,
  },
  async input => {
    const {output} = await premiumRiskExplanationPrompt(input);
    return output!;
  }
);
