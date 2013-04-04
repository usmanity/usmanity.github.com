---
layout: demo
title: css spinner - webkit only
---

<style>
#spinner {
  -webkit-animation: spin .5s infinite;
  -webkit-animation-delay: 1ms;
  width: 50px;
  margin: auto;
  display: block;
  border-top: 1px solid;
  border-width: 50%;
  margin-top: 200px;
  border-radius: 5px;
  border-color: rgb(150, 150, 150);
}
@-webkit-keyframes spin {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
     -webkit-transform: rotate(360deg);
  }
}
</style>

<div id="spinner">

</div>
