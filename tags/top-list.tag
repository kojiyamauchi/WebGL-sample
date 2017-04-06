    <!--  Custom DOM Definition. -->
    <top-list>

      <!-- Insert Components / Layout -->
      <p each={ lists }><a href="{ path }">{ course } <span>To</span> { target }</a></p>
      <!-- Insert Components End. -->

      <!-- CSS Definition. Using Sass. -->
      <style type="scss">
      :scope {
        display: block;
        p {
            text-align: center;
            transform: translate(0,450%);
            margin: 0 0 15px;

            a {
                color: #999 !important;
                display: inline-block;

                span {
                    transform: rotate(0deg);
                    transition: transform 0.5s;
                    display: inline-block;
                }

                &:hover {
                }
            }

              a {
                  &:hover {
                      span {
                          transform: rotate(360deg);
                          transition: transform 0.5s;
                      }
                  }
              }

            &:last-of-type {
              margin: 0;
                a {
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
      this.lists = [
        {
          path: 'sample1.html',
          course: 'Go',
          target: 'Sample1.'
        },
        {
          path: 'sample2.html',
          course: 'Go',
          target: 'Sample2.'
        },
        {
          path: 'https://github.com/kojiyamauchi/WebGL_sample',
          course: 'Back',
          target: 'GitHub.'

        }
      ]

      </script>
      <!-- JavaScript End. -->

    </top-list>
    <!--  Custom DOM End. -->
