import React from 'react/addons';
import {Link} from 'react-router';
import Icon from '../components/icon';

export default React.createClass({
  render() {
    return (
      <main className="main">
        <div className="container text">
          <h2>Što je ovo?</h2>
          <p>Paaa…</p>
          <p>Puno sam naučio o vezama u zadnjih nekoliko godina, bilo putem iskustva, knjiga, članaka ili <a href="https://en.wikipedia.org/wiki/Podcast">podcasta</a>, pa bih htio podijeliti to znanje, jer bih volio da sam neke stvari znao prije.</p>
          <h2>Ti se šališ?</h2>
          <p>Čak i ne :D</p>
          <p>Ne volim rješavati logičke zagonetke ili sudoku, ali volim riješavati ljubavne (i seksualne) probleme. Oduvijek sam htio probati to kao hobi, pa eto mi prilike :)</p>
          <Link to="/pitaj" className="btn btn-lg btn-primary">
            <Icon
              symbol="question"
              role="presentation"
              width="16"
              height="16" />
            <span>Pitaj me nešto</span>
          </Link>
          <p>Usluga je, naravno, <strong>besplatna</strong>. To je moj eksperiment.</p>
          <h2>Ti si neki ljubavni stručnjak?</h2>
          <p>Ne, ali izgleda da ne moraš biti kvalificiran da daješ savjete, jer je definicija “savjeta”:</p>
          <blockquote cite="http://hjp.novi-liber.hr/index.php?show=search_by_id&id=dlZmXhI%3D">
            <p>preporuka što i kako treba raditi ili kako postupiti u određenom slučaju</p>
            <footer>—<a href="http://hjp.novi-liber.hr/index.php?show=search_by_id&id=dlZmXhI%3D">Hrvatski jezični portal</a></footer>
          </blockquote>
          <p>Ipak, moje znanje nije bazirano samo na iskustvu, čitao sam poznate knjige o ljudskoj seksualnosti kao <a href="http://amzn.com/0061707813">Sex at Dawn</a> i <a href="http://amzn.com/0061906093">What Do Women Want?</a> i već nekoliko godina slušam podcast <a href="http://www.savagelovecast.com">Savage Lovecast</a>, gdje često stručnjaci govore o istraživanjima na području ljudske seksualnosti.</p>
          <p>Mislim da je seks <strong>jednako</strong> bitan kao i emocionalni dio veze. Odgojeni smo s idejom da “seks nije toliko bitan” i da se na njemu “uvijek može poraditi”, negirajući da postoji nešto što se zove <em>nekompatibilnost</em>.</p>
          <h2>Što mogu očekivati?</h2>
          <p>Možeš računati na ovo:</p>
          <ul>
            <li>neću te osuđivati</li>
            <li>potrudit ću se naći riješenje gdje su svi sretni</li>
            <li>možda ću ti reći da mislim da problem nije riješiv, ali to nije smak svijeta</li>
          </ul>
          <p>Što više informacija imam, to ću moći dati bolji savjet.</p>
          <h2>Ali te stvari su privatne!</h2>
          <p>Obećajem da neću nikome reći ;) Svi ponekad trebamo pričati s nekime o našim ljubavnim problemima, a teško je dobiti dobar savjet ako ne podijelimo nešto privatno.</p>
        </div>
      </main>
    );
  }
});
