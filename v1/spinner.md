---
layout: demo
title: css spinner - webkit only
---

<style>
  #spinner {
    -webkit-animation: spin .5s infinite;
    -webkit-animation-delay: 1ms;
    margin: 10% auto auto;
    border-top: 1px solid rgb(150, 150, 150);
    width: 50px;
  }
  @-webkit-keyframes spin {
    from { -webkit-transform: rotate(0deg); }
    to { -webkit-transform: rotate(360deg); }
  }
</style>
<div id="spinner">
</div>
