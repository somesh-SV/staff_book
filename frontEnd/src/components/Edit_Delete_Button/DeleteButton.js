import { TrashIcon } from "@heroicons/react/24/outline";
import { Tooltip } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";

const DeleteButton = ({ fun }) => {
  return (
    <Tooltip
      placement="bottom"
      content="Delete"
      className="text-[10px] font-semibold py-0.5 px-2 pb-0 bg-red-50 text-red-700 rounded-sm"
    >
      <Link
        onClick={fun}
        className="bg-red-50 rounded-tl-xl rounded-br-xl rounded-sm p-1.5"
      >
        <TrashIcon className="w-5 h-5 text-red-700" />
      </Link>
    </Tooltip>
  );
};

export default DeleteButton;
