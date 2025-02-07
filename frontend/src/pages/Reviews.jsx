import React from "react";
import ReviewsList from "../components/ReviewsList";
import { TbArrowDownDashed } from "react-icons/tb";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

const Reviews = () => {
  return (
    <section className="w-[99%] rounded-xl overflow-hidden p-6">
      <div className="fixed bg-background w-full top-16 pb-4">
        <Menu as="div" className=" active:text-accent relative inline-block ">
          {/* button  */}
          <MenuButton className="text-xl mt-10 px-4 py-2 bg-primary rounded-lg flex items-center gap-4  active:bg-primary">
            Most populars
            <TbArrowDownDashed aria-hidden="true" />
          </MenuButton>

          {/* dropdown  */}
          <MenuItems
            transition
            className="absolute z-10 mt-2 w-56 origin-top-right rounded-lg bg-primary ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
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
