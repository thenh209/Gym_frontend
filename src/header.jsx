import Navigation from './navigation';
import Logo from './logo';
import background from './assets/background.jpg';
export default function Header()
{
return (
<header  style={{backgroundImage:`url(${background})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
<Logo />
<h1 id="title">NEVER FITNESS</h1>
<Navigation />
</header>
);
}