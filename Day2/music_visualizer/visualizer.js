body {
    margin: 0;
}

.vz-wrapper {
    position: relative;
    height: 100vh;
    width: 100%;
    background: -webkit-gradient(radial, center center, 0, center center, 460, from(#d3d038), to(#d12b2b));
    background: -webkit-radial-gradient(circle, #d6e040, #f14f4f);
    background: -moz-radial-gradient(circle, #d6e040, #a33d3d);
    background: -ms-radial-gradient(circle, #d6e040, #b64d4d);
    box-shadow: inset 0 0 160px 0 #000;
    cursor: pointer;
}

.vz-wrapper.-canvas {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: initial;
    width: initial;
    background: transparent;
    box-shadow: none;
}

@media screen and (min-width: 420px) {
    .vz-wrapper {
        box-shadow: inset 0 0 200px 60px #000;
    }
}
