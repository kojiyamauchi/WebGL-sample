    <!--  Custom DOM Definition. -->
    <bg3 class={ bg: true }>

      <!-- Insert Components / Layout -->
      <!-- Insert Components End. -->

      <!-- CSS Definition. Using Sass. -->
      <style type="scss">
      :scope {
        background-image: url("images/bg3.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        opacity: 0;
        @media screen and (max-width:1024px) {
            @media screen and (orientation: portrait) {
              background-position: 50%,0;
          }
        }
      }
      </style>
      <!-- CSS End. -->

      <!-- JavaScript / Logic -->
      <script>
      </script>
      <!-- JavaScript End. -->

    </bg3>
    <!--  Custom DOM End. -->
