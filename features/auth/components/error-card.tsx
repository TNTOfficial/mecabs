import { CardWrapper } from "./card-wrapper";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

export const ErrorCard = () => {
  <CardWrapper
    headerMainLabel="Oops! Something went wrong!"
    backButtonHref="/login"
    backButtonLabel="Back to login"
  >
    <div className="w-full flex justify-center items-center">
      <ExclamationTriangleIcon className="text-destructive" />
    </div>
  </CardWrapper>;
};
