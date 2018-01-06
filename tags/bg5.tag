<!-- Custom DOM Definition. -->
<bg5 class={ bg: true }>

  <!-- Insert Components / Layout -->
  <!-- Insert Components End. -->

  <!-- CSS Definition. Using Sass. -->
  <style type="scss">
    :scope {
      background-image: url("images/bg5.jpg");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      display: none;
      @media screen and (orientation: portrait) {
        background-position: center 30px;
        background-color: #ffffff;
      }
      @media screen and (min-width: 1441px) {
        height: calc(100vh + 20px);
        top: -20px;
      }
    }
  </style>
  <!-- CSS End. -->

  <!-- JavaScript / Logic -->
  <script></script>
  <!-- JavaScript End. -->

</bg5>
<!-- Custom DOM End. -->