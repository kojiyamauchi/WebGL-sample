    <!--  Custom DOM Definition. -->
    <list>

      <!-- Insert Components / Layout -->
      <ul>
        <li each={ lists }><a href="{ path }">{ course } <span>To</span> { target }</a></li>
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
      this.lists = [{
        path: 'http://kojiyamauchi.com/webGL_sample/',
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

    </list>
    <!--  Custom DOM End. -->
