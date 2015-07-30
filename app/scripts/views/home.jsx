import React from 'react/addons';

export default React.createClass({
  render() {
    return (
      <div>
        <header className="header">
          <div className="container">
            <h1 className="header-title"><span className="heart">❤︎</span> Ljubavni savjeti</h1>
          </div>
        </header>

        <main className="main">
          <div className="container text">
            <h2>Što je ovo?</h2>
            <p>Paa…</p>
            <p>Puno sam naučio o vezama u zadnjih nekoliko godina, bilo putem knjiga, članaka ili <a href="https://en.wikipedia.org/wiki/Podcast">podcasta</a>. Ovo je moj način da podijelim to znanje.</p>
            <h2>Ti se šališ?</h2>
            <p>Čak i ne :D</p>
            <p>Ne volim rješavati logičke zagonetke ili sudoku, ali volim riješavati ljubavne i seksualne probleme.</p>
            <h2>A tko ti misliš da jesi?</h2>
            <p>Definicija "savjeta" je:</p>
            <blockquote cite="http://hjp.novi-liber.hr/index.php?show=search_by_id&id=dlZmXhI%3D">
              <p>preporuka što i kako treba raditi ili kako postupiti u određenom slučaju</p>
              <footer>—<a href="http://hjp.novi-liber.hr/index.php?show=search_by_id&id=dlZmXhI%3D">Hrvatski jezični portal</a></footer>
            </blockquote>
            <p>dakle bilo tko je kvalificiran dati ga :)</p>
            <p>Ipak, moje znanje nije bazirano samo na iskustvu, čitao sam poznate knjige o ljudskoj seksualnosti kao <a href="http://amzn.com/0061707813">Sex at Dawn</a> i <a href="http://amzn.com/0061906093">What Do Women Want?</a> i već nekoliko godina slušam podcast <a href="http://www.savagelovecast.com">Savage Lovecast</a>, gdje često stručnjaci govore o istraživanjima na području ljudske seksualnosti.</p>
            <h2>A zašto to radiš?</h2>
            <p>Ljubav je komplicirana, ponekad ne znamo što da učinimo jer nam srce govori jedno, mozak drugo, prijatelji treće, a kultura četvrto (zapravo, često govori isto što i prijatelji). Volio bih da sam znao neke stvari ranije.</p>
            <h2>Kakve odgovore mogu očekivati?</h2>
            <p>Ono na što možeš računati je:</p>
            <ul>
              <li>da te neću osuđivati</li>
              <li>potrudit ću se naći riješenje gdje su svi sretni</li>
            </ul>
            <p>Što više informacija imam, to ću moći dati bolji savjet.</p>
            <h2>Ali te stvari su privatne!</h2>
            <p>Obećajem da neću nikome reći ;) Ovo je tvoj ispušni ventil, svi ponekad trebamo pričati s nekime o našim ljubavnim problemima, a teško je dobiti dobar savjet ako ne podijelimo nešto privatno.</p>
          </div>
        </main>
      </div>
    );
  }
});
