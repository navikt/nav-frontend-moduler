import React from "react";
import { HashRouter as Router, Link } from "react-router-dom";
import {
  InternalHeader,
  InternalHeaderTitle as Title,
  InternalHeaderUser as User,
  InternalHeaderUserMenu as UserMenu,
  InternalHeaderUserMenuItem as UserMenuItem,
  InternalHeaderDropdownMenu as DropdownMenu,
  InternalHeaderDropdownMenuItem as DropdownMenuItem,
} from "../src/index";

export default {
  title: "@navikt/internal-header",
  component: InternalHeader,
};

export const All = () => (
  <div style={{ marginBottom: 200 }}>
    <h1>Title + Dropdown + User Menu</h1>
    <Router>
      <InternalHeader>
        <Title>NAV Sykepenger</Title>
        <DropdownMenu style={{ marginLeft: "auto" }}>
          <DropdownMenuItem href="#">ahref</DropdownMenuItem>
          <DropdownMenuItem component={Link} to="/">
            Link
          </DropdownMenuItem>
          <DropdownMenuItem component="button" onClick={() => {}}>
            button
          </DropdownMenuItem>
        </DropdownMenu>
        <UserMenu user={{ name: "Kong Harald", ident: "D123456" }}>
          <UserMenuItem href="#">4806 NFP Drammen</UserMenuItem>
          <UserMenuItem component={Link} to="/">
            3286 NFP Oslo
          </UserMenuItem>
          <UserMenuItem component="button" onClick={() => {}}>
            Logg ut
          </UserMenuItem>
        </UserMenu>
      </InternalHeader>
    </Router>

    <h1>Title + User Menu</h1>
    <Router>
      <InternalHeader>
        <Title>NAV Sykepenger</Title>
        <UserMenu
          user={{ name: "Kong Harald", ident: "D123456" }}
          style={{ marginLeft: "auto" }}
        >
          <UserMenuItem href="#">4806 NFP Drammen</UserMenuItem>
          <UserMenuItem component={Link} to="/">
            3286 NFP Oslo
          </UserMenuItem>
          <UserMenuItem component="button" onClick={() => {}}>
            Logg ut
          </UserMenuItem>
        </UserMenu>
      </InternalHeader>
    </Router>

    <h1>Title + User Menu with role</h1>
    <Router>
      <InternalHeader>
        <Title>NAV Sykepenger</Title>
        <UserMenu
          user={{ name: "Kong Harald", ident: "D123456", role: "Konge" }}
          style={{ marginLeft: "auto" }}
        >
          <UserMenuItem href="#">4806 NFP Drammen</UserMenuItem>
          <UserMenuItem component={Link} to="/">
            3286 NFP Oslo
          </UserMenuItem>
          <UserMenuItem component="button" onClick={() => {}}>
            Logg ut
          </UserMenuItem>
        </UserMenu>
      </InternalHeader>
    </Router>

    <h1>Title + User Menu with unit</h1>
    <Router>
      <InternalHeader>
        <Title>NAV Sykepenger</Title>
        <UserMenu
          user={{ name: "Kong Harald", ident: "D123456", unit: "NAV Sagene" }}
          style={{ marginLeft: "auto" }}
        >
          <UserMenuItem href="#">4806 NFP Drammen</UserMenuItem>
          <UserMenuItem component={Link} to="/">
            3286 NFP Oslo
          </UserMenuItem>
          <UserMenuItem component="button" onClick={() => {}}>
            Logg ut
          </UserMenuItem>
        </UserMenu>
      </InternalHeader>
    </Router>

    <h1>Title + User Menu with unit and role</h1>
    <Router>
      <InternalHeader>
        <Title>NAV Sykepenger</Title>
        <UserMenu
          user={{
            name: "Kong Harald",
            ident: "D123456",
            unit: "NAV Sagene",
            role: "Konge",
          }}
          style={{ marginLeft: "auto" }}
        >
          <UserMenuItem href="#">4806 NFP Drammen</UserMenuItem>
          <UserMenuItem component={Link} to="/">
            3286 NFP Oslo
          </UserMenuItem>
          <UserMenuItem component="button" onClick={() => {}}>
            Logg ut
          </UserMenuItem>
        </UserMenu>
      </InternalHeader>
    </Router>

    <h1>Uten innhold</h1>
    <InternalHeader />

    <h1>Title</h1>
    <InternalHeader>
      <Title>Tittel</Title>
    </InternalHeader>

    <h1>Title but not heading</h1>
    <InternalHeader>
      <Title component="span">Tittel</Title>
    </InternalHeader>

    <h1>Title with link</h1>
    <InternalHeader>
      <Title>
        <a href="/#">Tittel med lenke</a>
      </Title>
    </InternalHeader>

    <h1>Title with react-router link</h1>
    <Router>
      <InternalHeader>
        <Title>
          <Link to="/">Tittel med lenke</Link>
        </Title>
      </InternalHeader>
    </Router>

    <h1>Title + User</h1>
    <InternalHeader>
      <Title>NAV Sykepenger</Title>
      <User
        user={{ name: "Kong Harald", ident: "D123456" }}
        style={{ marginLeft: "auto" }}
      />
    </InternalHeader>

    <h1>Title + Complete User</h1>
    <InternalHeader>
      <Title>NAV Sykepenger</Title>
      <User
        user={{
          name: "Kong Harald",
          ident: "D123456",
          unit: "NAV Sagene",
          role: "Konge",
        }}
        style={{ marginLeft: "auto" }}
      />
    </InternalHeader>
  </div>
);
