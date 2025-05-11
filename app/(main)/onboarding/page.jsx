import { industries } from "@/data/industries";
import OnboardingForm from "./_components/on-boarding-form";
import { getUserOnboardingStatus } from "@/actions/user";
import { redirect } from "next/navigation";


const onboardingPage = async () => {
  // Check if the user is already onboaded
  const { isOnboarded } = await getUserOnboardingStatus();

  if (isOnboarded) {
    redirect("/dashboard");
  }
  return (
    <main>
      <OnboardingForm industries={industries} />
    </main>
  );
};

export default onboardingPage;
