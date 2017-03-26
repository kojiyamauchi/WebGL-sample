    <!--  Custom DOM Definition. -->
    <list>

      <!-- Insert Components / Layout -->
      <ul>
        <li><a href="http://kojiyamauchi.com/webGL_sample/">Back <span>To</span> List.</a></li>
        <li><a href="https://github.com/kojiyamauchi/WebGL_sample">Back  <span>To</span> GitHub.</a></li>
      </ul>
      <!-- Insert Components End. -->

      <!-- CSS Definition. Using Sass. -->
      <style type="scss">
      :scope {
        position: absolute;
        top: 15px;
        left: 15px;
        ul {

            li {
                transform: rotateX( 90deg );
                transition: transform 0.5s;

                &.rotate {
                    transform: rotateX( 0deg );
                    transition: transform 0.5s;
                }

                a {
                    color: #999 !important;
                    display: inline-block;
                    opacity: 1;
                    transition: opacity 0.5s;

                    span {
                        transform: rotate(0deg);
                        transition: transform 0.5s;
                        display: inline-block;
                    }

                    &:hover {
                        opacity: 0.75;
                        transition: opacity 0.5s;

                        span {
                            transform: rotate(-360deg);
                            transition: transform 0.5s;
                        }
                    }
                }

                &:first-of-type {
                    margin: 0 0 15px;
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

    </list>
    <!--  Custom DOM End. -->
