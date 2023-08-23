import React, { useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownItem,
  DropdownMenu,
} from "@nextui-org/react";
import { NavLink } from "react-router-dom";
import {
  ChevronDown,
  Lock,
  Activity,
  Flash,
  Server,
  TagUser,
  Scale,
} from "./Icons.js";

export default function Navbar2() {
  useEffect(() => {});

  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
    scale: <Scale className="text-warning" fill="currentColor" size={30} />,
    lock: <Lock className="text-success" fill="currentColor" size={30} />,
    activity: (
      <Activity className="text-secondary" fill="currentColor" size={30} />
    ),
    flash: <Flash className="text-primary" fill="currentColor" size={30} />,
    server: <Server className="text-success" fill="currentColor" size={30} />,
    user: <TagUser className="text-danger" fill="currentColor" size={30} />,
  };
  return (
    <Navbar position="static" isBordered>
      <NavbarBrand>
        <p className="font-bold text-2xl">MarinaSpá</p>
      </NavbarBrand>
      <NavbarContent className="sm:flex gap-4" justify="center">
        <NavbarItem className="h-full content-center">
          <NavLink
            exact
            activeClassName="is-active"
            className="flex items-center h-full text-slate-700 hover:text-slate-500 hover:underline hover:decoration-current hover:underline-offset-[25px]"
            to="/"
            aria-current="page"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
                clipRule="evenodd"
              />
            </svg>
          </NavLink>
        </NavbarItem>

        <Dropdown backdrop="blur">
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent text-md flex items-center h-full text-slate-700 hover:text-slate-500 hover:underline hover:decoration-current hover:underline-offset-[25px]"
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                Tratamientos
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem key="faciales">
              <NavLink activeClassName="is-active" to="/programas-faciales">
                Programas Faciales
              </NavLink>
            </DropdownItem>
            <DropdownItem key="estetica-general">
              <NavLink activeClassName="is-active" to="/estetica-general">
                Estética General
              </NavLink>
            </DropdownItem>
            <DropdownItem className="w-full" key="silueta-corporal">
              <NavLink
                activeClassName="is-active"
                className="w-full"
                to="/silueta-corporal"
              >
                Silueta Corporal
              </NavLink>
            </DropdownItem>
            <DropdownItem key="faciales">
              <NavLink activeClassName="is-active" to="/bienestar-y-relajacion">
                Bienestar y Relajación
              </NavLink>
            </DropdownItem>
            <DropdownItem key="faciales">
              <NavLink
                activeClassName="is-active"
                to="/depilacion-y-fotodepilacion"
              >
                Depilación
              </NavLink>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <NavbarItem>
          <NavLink
            activeClassName="is-active"
            className="text-slate-700 hover:text-slate-500 hover:underline hover:decoration-current hover:underline-offset-[25px]"
            to="/contacto"
          >
            Contacto
          </NavLink>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
