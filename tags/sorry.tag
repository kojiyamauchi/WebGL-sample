    <!--  Custom DOM Definition. -->
    <sorry>

      <!-- Insert Components / Layout -->
      <h1><span>S</span><span>o</span><span>r</span><span>r</span><span>y</span><span>,</span>&nbsp;&nbsp;<span>P</span><span>C</span>&nbsp;&nbsp;<span>O</span><span>n</span><span>l</span><span>y</span><span>.</span></h1>
      <p><a href="https://github.com/kojiyamauchi/WebGL_sample">Back <span>To</span> GitHub</a></p>
      <!-- Insert Components End. -->

      <!-- CSS Definition. Using Sass. -->
      <style type="scss">
      :scope {
        display: block;
        h1 {
            text-align: center;
            padding-top: 280px;

            span {
                font-size: 100px;
                font-family: 'Source Sans Pro', sans-serif;
                color: #999;
                text-align: center;
                font-weight: lighter;
                display: inline-block;
                transform: translate(0,0);
                transition: all 0.5s;
                opacity: 0;

                &.down {
                    opacity: 1;
                    transform: translate(0,80%);
                    transition: all 0.65s;
                }
            }
        }
        p {
            text-align: center;
            transform: translate(0,450%);
            a {
                color: #999 !important;
                font-size: 34px;
                display: inline-block;
              }
          }

      }
      </style>
      <!-- CSS End. -->

      <!-- JavaScript / Logic -->
      <script>
      </script>
      <!-- JavaScript End. -->

    </sorry>
    <!--  Custom DOM End. -->
