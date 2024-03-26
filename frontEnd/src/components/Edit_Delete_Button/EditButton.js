import React from "react";
import { Link } from "react-router-dom";
import { Tooltip } from "@material-tailwind/react";
import { PencilSquareIcon } from "@heroicons/react/24/outline";

const EditButton = ({ path, fun }) => {
  return (
    <Tooltip
      placement="bottom"
      content="Edit"
      className="text-[10px] font-semibold py-0.5 px-2 pb-0 bg-indigo-50 text-indigo-600 rounded-sm"
    >
      <Link
        to={path}
        onClick={fun}
        className="bg-indigo-50 rounded-tl-xl rounded-br-xl rounded-sm p-1.5"
      >
        <PencilSquareIcon className="w-5 h-5 text-indigo-600" />
      </Link>
    </Tooltip>
  );
};

export default EditButton;
