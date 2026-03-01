import AsideLink from "../AsideLink";
import { Button } from "../Button";
import { IconAccount } from "../icons/IconAccount";
import { IconFeed } from "../icons/IconFeed";
import { IconInfo } from "../icons/IconInfo";
import { IconLogin } from "../icons/IconLogin";
import { Link } from "../Link";
import logo from "./logo.png";

import { useAuth } from "../../hooks/useAuth";
import styles from "./aside.module.css";

export const Aside = () => {
  const { isAuthenticated } = useAuth();

  return (
    <aside className={styles.aside}>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <img src={logo} alt="Logo da Code Connect" />
            </Link>
          </li>
          <li>
            <Button href="#" outline>
              Publicar
            </Button>
          </li>
          <li>
            <AsideLink href="/">
              <IconFeed />
              Feed
            </AsideLink>
          </li>
          <li>
            <AsideLink href="#">
              <IconAccount />
              Perfil
            </AsideLink>
          </li>
          <li>
            <AsideLink href="#">
              <IconInfo />
              Sobre nós
            </AsideLink>
          </li>
          {isAuthenticated && (
            <li>
              <AsideLink href="/auth/logout">
                <IconLogin />
                Logout
              </AsideLink>
            </li>
          )}
          {!isAuthenticated && (
            <li>
              <AsideLink href="/auth/login">
                <IconLogin />
                Login
              </AsideLink>
            </li>
          )}
        </ul>
      </nav>
    </aside>
  );
};
