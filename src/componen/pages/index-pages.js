import Footer from "./footer"
import Kontak from "./kontak"
import PagesHome from "./pages-home"
import PagesHome2 from "./pages-home2"
import PagesHome3 from "./pages-home3"
import PagesHome4 from "./pages-home4"

const IndexPages = () => {
    return (
        <div>
            <PagesHome />
            <PagesHome2 />
            <PagesHome3 />
            <PagesHome4 />
            <Kontak />
            <Footer />
        </div>
    )
}

export default IndexPages