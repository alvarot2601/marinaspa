import React, { useEffect, useState } from "react";
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
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
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
import {
  faFaceGrinHearts,
  faHouse,
  faSpa,
  faHandHoldingHeart,
  faPersonDotsFromLine,
  faHandHoldingDroplet,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Navbar2() {
  const [isMenuOpen, setMenuIsOpen] = useState(false);

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
    <Navbar
      position="static"
      isBordered
      className="h-[10vh] min-h-[60px] bg-zinc-100"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open Menu"}
          className="block md:hidden"
        ></NavbarMenuToggle>
        <NavbarBrand className="md:flex justify-end md:justify-start">
          <p className="font-bold text-2xl">MarinaSpá</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden md:flex" justify="center">
        <NavbarItem className="underline content-center">
          <NavLink
            exact
            activeClassName="is-active"
            className=" flex items-center text-slate-900 hover:text-slate-500 hover:underline hover:decoration-current hover:underline-offset-[25px]"
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
                className="p-0 bg-transparent data-[hover=true]:bg-transparent text-lg flex items-center h-full text-slate-900 hover:text-slate-500 hover:underline hover:decoration-current hover:underline-offset-[25px]"
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
            className="max-w-[340px] w-[300px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem key="faciales">
              <NavLink
                className="text-lg"
                activeClassName="is-active"
                to="/programas-faciales"
              >
                Programas Faciales
              </NavLink>
            </DropdownItem>
            <DropdownItem key="estetica-general">
              <NavLink
                className="text-lg"
                activeClassName="is-active"
                to="/estetica-general"
              >
                Estética General
              </NavLink>
            </DropdownItem>
            <DropdownItem className="w-full" key="silueta-corporal">
              <NavLink
                activeClassName="is-active"
                className="text-lg"
                to="/silueta-corporal"
              >
                Silueta Corporal
              </NavLink>
            </DropdownItem>
            <DropdownItem key="faciales">
              <NavLink
                activeClassName="is-active"
                to="/bienestar-y-relajacion"
                className="text-lg"
              >
                Bienestar y Relajación
              </NavLink>
            </DropdownItem>
            <DropdownItem key="faciales">
              <NavLink
                className="text-lg"
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
            className="text-slate-900 hover:text-slate-500 hover:underline hover:decoration-current hover:underline-offset-[25px] text-lg"
            to="/contacto"
          >
            Contacto
          </NavLink>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem>
          <NavLink
            exact
            activeClassName="is-active"
            className=" flex items-center gap-2 text-slate-900 hover:text-slate-500 hover:underline hover:decoration-current hover:underline-offset-[25px]"
            to="/"
            aria-current="page"
          >
            <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
            Inicio
          </NavLink>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <NavLink
            className="flex gap-2"
            activeClassName="is-active"
            to="/programas-faciales"
          >
            <FontAwesomeIcon icon={faFaceGrinHearts} />
            Programas Faciales
          </NavLink>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <NavLink
            className="flex gap-2"
            activeClassName="is-active"
            to="/estetica-general"
          >
            <FontAwesomeIcon icon={faHandHoldingHeart}></FontAwesomeIcon>
            Estética General
          </NavLink>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <NavLink
            activeClassName="is-active"
            className="flex gap-2"
            to="/silueta-corporal"
          >
            <FontAwesomeIcon icon={faPersonDotsFromLine}></FontAwesomeIcon>
            Silueta Corporal
          </NavLink>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <NavLink
            activeClassName="is-active"
            to="/bienestar-y-relajacion"
            className="flex gap-2"
          >
            <FontAwesomeIcon icon={faSpa}></FontAwesomeIcon>
            Bienestar y Relajación
          </NavLink>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <NavLink
            className="flex gap-2"
            activeClassName="is-active"
            to="/depilacion-y-fotodepilacion"
          >
            <FontAwesomeIcon icon={faHandHoldingDroplet}></FontAwesomeIcon>
            Depilación
          </NavLink>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <NavLink
            activeClassName="is-active"
            className="flex gap-2 "
            to="/contacto"
          >
            <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
            Contacto
          </NavLink>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
