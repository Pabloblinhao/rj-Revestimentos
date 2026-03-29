function Header(){
    return(
        <header>
            <div className="flex justify-between items-centes">
                <h1>RJ</h1>
                <nav>
                    <ul className="flex gap-4">
                    <li><a href="#">Início</a></li>
                    <li><a href="#">Serviços</a></li>
                    <li><a href="#">Contato</a></li>
                    </ul>
                    </nav>
                </div>
        </header>
    )
}

export default Header