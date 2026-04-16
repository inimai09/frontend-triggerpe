# **App Name**: TriggerPe

## Core Features:

- User Authentication & Onboarding: Secure login via Mobile or Email OTP, followed by a guided multi-step registration process to gather necessary delivery partner details including personal info, location, earning profile, and plan selection.
- Personalized Dashboard: A comprehensive central hub displaying user-specific policy information, real-time weather conditions relevant to parametric triggers, current coverage statistics, and recent claims history for immediate overview.
- Parametric Trigger Monitor: Visualize the status of various parametric triggers (e.g., Heavy Rain, Extreme Heat) with dynamic progress bars comparing current metrics against predefined payout thresholds, updated via external data sources.
- Policy & Claims Management: Users can view detailed active policy information, past claim records with their statuses, full payment history, and perform actions such as renewing coverage, pausing the policy, or changing their tier.
- AI-driven Premium & Risk Explanation Tool: Provides a transparent and easy-to-understand breakdown of individual premium calculations and risk assessments, utilizing an AI tool to explain complex factors in plain English bullet points.
- Dynamic Delivery Guy SVG: A highly customizable and reusable SVG component of a delivery worker on a scooter, featuring multiple weather-specific variations (sunny, rain, snow, thunder) that visually represent trigger conditions on cards.
- Admin Trigger & Worker Control Panel: An exclusive interface for administrators to manage and simulate parametric triggers for specific cities, monitor AI-powered fraud detection alerts on claims, and oversee delivery partner accounts.

## Style Guidelines:

- Drawing inspiration from the 'Maldives Ocean Blue' concept, the app embraces a serene yet vibrant aesthetic. The light scheme uses the user-defined background '#E0F7FA' (H=180, S=67%, L=93%) as a clean canvas.
- The primary interactive color is '#00ACC1' (H=187, S=100%, L=38%), chosen from the user's specified button color, offering a vibrant 'ocean blue' that represents brand and actionable elements. Primary text uses '#006064', and secondary text uses '#00838F'.
- The accent color is '#FFB74D' (H=33, S=100%, L=65%), derived from the user's 'Warning' color. This warm, bright orange provides a strong complementary contrast to the blues, effectively highlighting critical information or interactive points.
- All cards maintain a solid '#FFFFFF' background with a subtle shadow '0 4px 12px rgba(0,0,0,0.05)' and '#E2E8F0' borders, as explicitly requested, ensuring no transparency or glassmorphism is used.
- Headlines and prominent titles utilize 'Space Grotesk' (sans-serif) to convey a modern, technical, and impactful tone fitting the parametric insurance platform.
- Body text and descriptive content are rendered in 'Inter' (sans-serif), ensuring excellent readability and a clean, objective aesthetic across all detailed information, tables, and longer text blocks like FAQs.
- A bespoke, detailed SVG illustration of a 'Delivery Guy on Scooter' with dynamic weather-driven variations will serve as a key visual component. Other UI elements will use clear, modern line icons (e.g., home, policy, claims, weather) consistently across the application, adhering to the specified iconography.
- The application follows a flexible design, transitioning from a split-layout (50%/50% flex row) on the landing page to a persistent vertical sidebar for navigation (280px width) across authenticated pages, ensuring content readability and efficient access on all device sizes.
- Subtle and engaging micro-interactions and visual feedback for interactivity will be implemented. This includes a subtle sparkle effect on key elements of the landing page, hover animations for buttons (e.g., scale 1.02), smooth transitions for tabbed content and accordions, and captivating count-up animations for numeric data display.