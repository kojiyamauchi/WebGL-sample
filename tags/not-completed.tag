    <!--  Custom DOM Definition. -->
    <not-completed>

      <!-- Insert Components / Layout -->
      <p><span>N</span><span>o</span><span>t</span><span>&nbsp;</span><span>C</span><span>o</span><span>m</span><span>p</span><span>l</span><span>e</span><span>t</span><span>e</span><span>d</span><span>!</span><span>!</span><span>!</span></p>
      <!-- Insert Components End. -->

      <!-- CSS Definition. Using Sass. -->
      <style type="scss">
      :scope {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        p {
          span {
            font-size: 5em;
            font-weight: bold;
            color: #fff;
            text-shadow: 5px 5px 3px #000;
            display: inline-block;
            transform: rotateY(90deg);
            transition: transform 0.5s;
            &.rotate {
              transform: rotateY(0deg);
              transition: transform 0.5s;
            }
            @media screen and (max-width: 1024px) {
              font-size: 6.5em;
              @media screen and (orientation: landscape) {
                font-size: 7.5em;
              }
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

    </not-completed>
    <!--  Custom DOM End. -->
