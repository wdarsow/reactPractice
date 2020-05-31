import React from "react";

const HelloBootstrap = () => 
<div>
    <nav class="navbar navbar-light bg-light">
    <a class="navbar-brand" href="#">This is a Navbar</a>
    </nav>

    <div class="jumbotron">
        <h1 class="display-4">This is a Jumbotron</h1>
        <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr class="my-4"></hr>
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p class="lead">
            <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
        </p>
    </div>
        
    <div class="card">
        <div class="card-body">
            This is a Bootstrap card.
        </div>
    </div>
</div>

export default HelloBootstrap;