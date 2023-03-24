import { FaGlobe, FaUser } from "react-icons/fa";


interface ProfileCardProps {
  name: string;
    position: string;
}

// ProfileCard for images of people in about page.
// Name image with people's names. Locate images at /images. Maybe restructure the folder structures just for 
// Somebody please use Image instead of img. -David

export const ProfileCard = ({ name, position }: ProfileCardProps) => {
    const imgPath = "/images/profilecard/" + name + ".jpg";
  return (
    <div className="flex flex-col pt-4 items-center">
          <div className="h-52 w-52 rounded-xl">
              <img
                  src={imgPath}
                  className="object-contain object-center h-52 w-52"
                  alt={""}
              />
          </div>
      <div className="text-start md:text-center">
        <div className="text-slate-900 font-semibold dark:text-slate-50">
          {name}
        </div>
        <div className="text-slate-400 mt-0.5 text-sm leading-6 text-center">
          {position}
        </div>
      </div>
    </div>
  );
};
