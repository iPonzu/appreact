import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

export default function _header(){
    return (
        <header>
            <nav className='nav justify-content-end fw-bolder'>
                <a className="gap-1" href="https://github.com/iPonzu">
                    <Image
                        src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg'
                        alt='Github'
                        width={30}
                        height={30}
                    />
                </a>
                <Link href="/sobre">
                    <Image
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiI+CjxwYXRoIGQ9Ik0gMiA2IEwgMiAyNiBMIDcgMjYgTCA3IDMxLjA5Mzc1IEwgOC42MjUgMjkuNzgxMjUgTCAxMy4zNDM3NSAyNiBMIDMwIDI2IEwgMzAgNiBaIE0gNCA4IEwgMjggOCBMIDI4IDI0IEwgMTIuNjU2MjUgMjQgTCAxMi4zNzUgMjQuMjE4NzUgTCA5IDI2LjkwNjI1IEwgOSAyNCBMIDQgMjQgWiBNIDE1IDEwIEwgMTUgMTIgTCAxNyAxMiBMIDE3IDEwIFogTSAxNSAxNCBMIDE1IDIyIEwgMTcgMjIgTCAxNyAxNCBaIj48L3BhdGg+Cjwvc3ZnPg=="
                        alt="Sobre"
                        width={30}
                        height={30}
                    />
                </Link>
            </nav>
        </header>
    );
}

