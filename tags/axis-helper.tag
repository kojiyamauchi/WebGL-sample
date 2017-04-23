    <!--  Custom DOM Definition. -->
    <axis-helper>

      <!-- Insert Components / Layout -->
      <dl>
        <dt>Axis Helper Description.</dt>
        <dd>&#9642;&nbsp;Red Lines => X-Axis. / &#9642;&nbsp;Green Lines => Y-Axis. / &#9642;&nbsp;Blue Lines => Z-Axis.</dd>
      </dl>
      <!-- Insert Components End. -->

      <!-- CSS Definition. Using Sass. -->
      <style type="scss">
      :scope {
        position: absolute;
        bottom: 2.5%;
        width: 100%;
        text-align: center;
        color: #999;
        text-shadow: 1px 1px 1px #000;
        @media screen and (max-width: 1024px) {
          font-size: 1.5em;
          @media screen and (orientation: landscape) {
            font-size: 1.25em;
          }
        }
        dl {
          display: block;
          width: 100%;
          dt {
            display: block;
            width: 100%;
            margin: 0 0 5px 0;
          }
          dd {
            display: block;
            width: 100%;
          }
        }
        &.textWhite {
        color: #fff;
        }
      }
      </style>
      <!-- CSS End. -->

      <!-- JavaScript / Logic -->
      <script>
      </script>
      <!-- JavaScript End. -->

    </axis-helper>
    <!--  Custom DOM End. -->
