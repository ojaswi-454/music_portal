import React from "react";
import Font from "./Font";
import Cards from "./Cards";
import Lists from "./Lists";

function Home(){
    return(
        <div class="home">
<Font />
<h1 id="newReleases">New Releases</h1>
<div class="newReleaseCards">
<div class="nr"><Cards /></div>
<div class="nr"><Cards /></div>
<div class="nr"><Cards /></div>
<div class="nr"><Cards /></div>
<div class="nr"><Cards /></div>
<div class="nr"><Cards /></div>
</div>
<h1 id="artists">Artists</h1>
<div class="artistCards">
<div class="ar"><Cards /></div>
<div class="ar"><Cards /></div>
<div class="ar"><Cards /></div>
<div class="ar"><Cards /></div>
<div class="ar"><Cards /></div>
<div class="ar"><Cards /></div>
</div>
<div class="singles">
<div class="topSingles"><h1>Top Singles</h1>
<Lists />
</div>
<div class="newSingles">
<h1>New Singles</h1>
<Lists />
</div>
</div>
<h1 id="newstitle">News</h1>
<div class="newsCards">
<div class="news"><Cards /></div>
<div class="news"><Cards /></div>
<div class="news"><Cards /></div>
<div class="news"><Cards /></div>
<div class="news"><Cards /></div>
<div class="news"><Cards /></div>
</div>
        </div>
    );
}

export default Home;