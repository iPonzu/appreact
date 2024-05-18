import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

export default function _header(){
    return (
            <header>
                <nav className="nav justify-content-end items-end mr-2 vh-10">
                    <a className="p-2 g-col-2" href="https://github.com/iPonzu">
                        <Image
                            src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg'
                            alt='Github'
                            width={40}
                            height={40}
                        />
                    </a>
                    <Link className="p-2 g-col-2" href="/sobre">
                        <Image
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiI+CjxwYXRoIGQ9Ik0gMiA2IEwgMiAyNiBMIDcgMjYgTCA3IDMxLjA5Mzc1IEwgOC42MjUgMjkuNzgxMjUgTCAxMy4zNDM3NSAyNiBMIDMwIDI2IEwgMzAgNiBaIE0gNCA4IEwgMjggOCBMIDI4IDI0IEwgMTIuNjU2MjUgMjQgTCAxMi4zNzUgMjQuMjE4NzUgTCA5IDI2LjkwNjI1IEwgOSAyNCBMIDQgMjQgWiBNIDE1IDEwIEwgMTUgMTIgTCAxNyAxMiBMIDE3IDEwIFogTSAxNSAxNCBMIDE1IDIyIEwgMTcgMjIgTCAxNyAxNCBaIj48L3BhdGg+Cjwvc3ZnPg=="
                            alt="Sobre"
                            width={40}
                            height={40}
                        />
                    </Link>
                </nav>
        </header>
    );
}



