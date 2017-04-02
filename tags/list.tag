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
                margin: 0 0 15px;

                &.rotate {
                    transform: rotateX( 0deg );
                    transition: transform 0.5s;
                }

                a {
                    color: #999 !important;
                    text-shadow: 1px 1px 1px #000;
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
                            transform: rotate(360deg);
                            transition: transform 0.5s;
                        }
                    }
                }

                &:nth-last-of-type(2) {
                    &:hover {

                        span {
                            transform: rotate(-360deg);
                            transition: transform 0.5s;
                        }
                    }
                }
                &:last-of-type {
                  margin: 0;
                    &:hover {

                        span {
                            transform: rotate(-360deg);
                            transition: transform 0.5s;
                        }
                    }
                }
            }
        }

      }
      </style>
      <!-- CSS End. -->

      <!-- JavaScript / Logic -->
      <script>
      this.lists = [{
        path: 'sample1.html',
        course: 'Go',
        target: 'Sample1.'
      },{
        path: 'sample2.html',
        course: 'Go',
        target: 'Sample2.'
      },{
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

    </list>
    <!--  Custom DOM End. -->
