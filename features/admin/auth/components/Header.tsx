import { Button } from "@/components/ui/button";

interface HeaderProps {
  mainLabel?: string;
  subLabel?: string;
  changeFormType?: () => void;
}

export const Header = ({
  mainLabel,
  subLabel,
  changeFormType,
}: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-2 items-center justify-center mb-4">
      <h1 className="text-3xl font-semibold text-center">{mainLabel}</h1>
      <p className="font-normal w-full size-sm text-center">
        {subLabel}
        <Button
          variant="link"
          className="font-normal size-sm h-auto p-0 inline ps-3 underline"
          onClick={changeFormType}
        >
          {mainLabel === "Sign in to your account"
            ? "Create a new account"
            : "Sign In"}
        </Button>
      </p>
    </div>
  );
};
