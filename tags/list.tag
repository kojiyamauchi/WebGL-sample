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
                @media screen and (max-width: 1024px) {
                  margin: 0 0 5% 0;
                }
                &.rotate {
                    transform: rotateX( 0deg );
                    transition: transform 0.5s;
                }
                a {
                    color: #999 !important;
                    text-shadow: 1px 1px 1px #000;
                    display: inline-block;
                    @media screen and (max-width: 1024px) {
                      font-size: 2.75em;
                      @media screen and (orientation: landscape) {
                        font-size: 2em;
                      }
                    }
                    span {
                        transform: rotate(0deg);
                        transition: transform 0.5s;
                        display: inline-block;
                    }
                    &:hover {
                        span {
                            transform: rotate(360deg);
                            transition: transform 0.5s;
                        }
                    }
                    &.textWhite {
                      color: #fff !important;
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
      },
      {
        path: 'sample2.html',
        course: 'Go',
        target: 'Sample2.'
      },
      {
        path: 'sample3.html',
        course: 'Go',
        target: 'Sample3.'
      },
      {
        path: 'sample4.html',
        course: 'Go',
        target: 'Sample4.'
      },
      {
        path: 'sample5.html',
        course: 'Go',
        target: 'Sample5.'
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

    </list>
    <!--  Custom DOM End. -->
