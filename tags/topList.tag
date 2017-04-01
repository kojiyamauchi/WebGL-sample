    <!--  Custom DOM Definition. -->
    <topList>

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
                }
            }

            &:first-of-type {
                margin: 0 0 15px;

                a {
                    &:hover {
                        span {
                            transform: rotate(360deg);
                            transition: transform 0.5s;
                        }
                    }
                }
            }

            &:last-of-type {
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
          path: 'https://github.com/kojiyamauchi/WebGL_sample',
          course: 'Back',
          target: 'GitHub.'

        }
      ]

      </script>
      <!-- JavaScript End. -->

    </topList>
    <!--  Custom DOM End. -->
