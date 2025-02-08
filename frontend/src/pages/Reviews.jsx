import React from "react";
import ReviewsList from "../components/ReviewsList";
import { TbArrowDownDashed } from "react-icons/tb";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import CreateReview from "./CreateReview";
import { Link } from "react-router-dom";

const Reviews = () => {
  return (
    <section className="w-full rounded-xl overflow-hidden px-6">
      <div className="fixed w-[85%] flex justify-between bg-background">
        <Menu as="div" className="active:text-accent relative">
          {/* button  */}
          <MenuButton className="text-xl px-4 py-2 bg-primary rounded-lg flex items-center gap-4  active:bg-primary">
            Most populars
            <TbArrowDownDashed aria-hidden="true" />
          </MenuButton>

          {/* dropdown  */}
          <MenuItems
            transition
            className="absolute top-14 z-10 w-56 origin-top-right rounded-lg bg-primary ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
          >
            <div className="py-1">
              <MenuItem>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-text hover:text-accent transition data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                >
                  Most populars
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-text hover:text-accent data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                >
                  Latest
                </a>
              </MenuItem>
            </div>
          </MenuItems>
        </Menu>
      </div>

      <ReviewsList />
    </section>
  );
};

export default Reviews;
