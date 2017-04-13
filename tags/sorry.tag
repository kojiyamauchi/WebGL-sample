    <!--  Custom DOM Definition. -->
    <sorry>

      <!-- Insert Components / Layout -->
      <h1><span>S</span><span>o</span><span>r</span><span>r</span><span>y</span><span>,</span>&nbsp;&nbsp;<span>P</span><span>C</span>&nbsp;&nbsp;<span>O</span><span>n</span><span>l</span><span>y</span><span>.</span></h1>
      <p each={ lists }><a href="{ path }">{ course } <span>To</span> { target }</a></p>
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
        p {
            text-align: center;
            transform: translate(0,450%);
            margin: 0 0 10px 0;
            @media screen and (max-width: 1024px) {
              margin: 0 0 2.5% 0;
            }
            a {
                color: #999 !important;
                font-size: 1em;
                display: inline-block;
                @media screen and (max-width: 1024px) {
                  font-size: 2.125em;
                }
            }
        }
      }
      </style>
      <!-- CSS End. -->

      <!-- JavaScript / Logic -->
      <script>
      this.lists = [{
        path: 'sample2.html',
        course: 'Go',
        target: 'Sample2.'
      },
      {
        path: 'index.html',
        course: 'Back',
        target: 'List.'
      },
      {
        path: 'https://github.com/kojiyamauchi/WebGL_sample',
        course: 'Back',
        target: 'GitHub.'
      }]
      </script>
      <!-- JavaScript End. -->

    </sorry>
    <!--  Custom DOM End. -->
