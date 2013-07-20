---
layout: demo
title: airplane - webkit only
---

<style>

@import url(http://fonts.googleapis.com/css?family=Headland+One);

body { width: 100%; height: 100%;    background-color: #e8dfeb; }

div {
   border-radius: 4px;
   position: relative;

   font-size: 175px;
   font-family: Headland One, sans-serif;
}
div p {
  color: #6b5f6b;
  position: fixed;
  margin: auto;
  width: 200px;
  bottom: 0;
  text-align: center;
  margin-left: -16px;
  -webkit-transform: rotate(-90deg);
  -webkit-animation: fly 2s 1;
}

@-webkit-keyframes fly {
  from {  }
  to { bottom: 80%; }
}
.stay { bottom: 190px !important; }
</style>

<div>
  <p>✈</p>
</div>