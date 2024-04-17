import { UserProfile } from "@clerk/nextjs";

const page = () => {
  return (
    <div className="flex item-center justify-center">
      <UserProfile />
    </div>
  );
};

export default page;
