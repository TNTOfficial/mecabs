import { Button } from "@/components/ui/button";

interface HeaderProps {
  mainLabel?: string;
  subLabel?: string;
  changeFormType: () => void;
}

export const Header = ({
  mainLabel,
  subLabel,
  changeFormType,
}: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1 className="text-3xl font-semibold">{mainLabel}</h1>
      <p className="font-normal w-full size-sm">{subLabel}</p>
      <Button
        variant="link"
        className="font-normal w-full size-sm"
        onClick={changeFormType}
      >
        {mainLabel === "Sign in to your account"
          ? "Create a new account"
          : "Sign In"}
      </Button>
    </div>
  );
};
