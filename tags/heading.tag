    <!--  Custom DOM Definition. -->
    <heading>

      <!-- Insert Components / Layout -->
      <h1><span>I</span><span>n</span><span>d</span><span>e</span><span>x</span><span>.</span></h1>
      <!-- Insert Components End. -->

      <!-- CSS Definition. Using Sass. -->
      <style type="scss">
      :scope {
        display: block;
        h1 {
            text-align: center;
            padding-top: 240px;
            @media screen and (max-width: 1024px) {
              padding-top: 25%;
              @media screen and (orientation: landscape) {
                padding-top: 15%;
              }
            }
            @media screen and (max-width: 991px) {
              @media screen and (orientation: landscape) {
                padding-top: 10%;
              }
            }
            span {
                font-size: 3.375em;
                font-family: 'Source Sans Pro', sans-serif;
                color: #999;
                text-align: center;
                font-weight: lighter;
                display: inline-block;
                transform: translate(0,0);
                transition: all 0.5s;
                opacity: 0;
                @media screen and (max-width: 1024px) {
                  font-size: 6.25em;
                }

                &.down {
                    opacity: 1;
                    transform: translate(0,80%);
                    transition: all 0.65s;
                }
            }
        }
      }
      </style>
      <!-- CSS End. -->

      <!-- JavaScript / Logic -->
      <script>

      </script>
      <!-- JavaScript End. -->

    </heading>
    <!--  Custom DOM End. -->
