function Header(){
    return(
        <header className="mb-50">
            <div className="flex justify-between items-centes">
                <h1 className="text-4xl font-inter tracking-wide">RJ</h1>
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