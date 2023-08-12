import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, DropdownTrigger, Dropdown, DropdownItem, DropdownMenu} from "@nextui-org/react";
import { NavLink } from "react-router-dom";
import {ChevronDown, Lock, Activity, Flash, Server, TagUser, Scale} from "./Icons.js";

export default function Navbar2() {

    const icons = {
        chevron: <ChevronDown fill="currentColor" size={16} />,
        scale: <Scale className="text-warning" fill="currentColor" size={30} />,
        lock: <Lock className="text-success" fill="currentColor" size={30} />,
        activity: <Activity className="text-secondary" fill="currentColor" size={30} />,
        flash: <Flash className="text-primary" fill="currentColor" size={30} />,
        server: <Server className="text-success" fill="currentColor" size={30} />,
        user: <TagUser className="text-danger" fill="currentColor" size={30} />,
      };
  return (
    <Navbar shouldHideOnScroll isBordered>
      <NavbarBrand>
        
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className="sm:flex gap-4" justify="center">
      <NavbarItem>
          <NavLink exact activeClassName='is-active' to="/" aria-current="page">
            Home
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink activeClassName='is-active' to="/k">
            Tratamientos
          </NavLink>
        </NavbarItem>

        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
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
            <DropdownItem
              key="faciales"
              
            >
              Programas Faciales
            </DropdownItem>
            <DropdownItem
              key="estetica-general"
              
            >
               <NavLink activeClassName='is-active' to="/">
                    Estética General
                </NavLink>
            </DropdownItem>
            <DropdownItem
              key="silueta-corporal"
              
            >
              Silueta Corporal
            </DropdownItem>
            <DropdownItem
              key="faciales"
              
            >
              Bienestar y Relajación
            </DropdownItem>
            <DropdownItem
              key="faciales"
              
            >
              Depilación
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
            


        <NavbarItem>
          <NavLink activeClassName='is-active' to="/contacto">
            Contacto
          </NavLink>
        </NavbarItem>
      </NavbarContent>
      
    </Navbar>
  );
}
