import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";

const ProfileCard = ({ name, role, image, socialLinks }) => {
  return (
    <Card className="w-full sm:w-72  lg:w-80 text-center">
      <CardHeader floated={false} className="h-80">
        <img src={image} alt={`${name}-profile`} className="h-full w-full object-cover" />
      </CardHeader>
      <CardBody className="text-center py-4">
        <Typography variant="h4" color="blue-gray" className="font-serif">
          {name}
        </Typography>
        <Typography color="blue-gray" className="font-serif">
          {role}
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-center gap-4 pt-1">
        {socialLinks.map((link) => (
          <Tooltip key={link.platform} content={link.tooltip}>
            <Typography
              as="a"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              variant="lead"
              color={link.color}
              textGradient
            >
              <i className={link.icon} />
            </Typography>
          </Tooltip>
        ))}
      </CardFooter>
    </Card>
  );
};

export default ProfileCard;
