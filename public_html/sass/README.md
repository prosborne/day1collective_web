# core-dev-npm | sass
The purpose of this readme is to outline the usage of the _mixins.scss file as well as any directions for specific files or structure of this directory

## _mixins.scss usage

#### rem conversion mixin
```
p {
  @include font-size(14px)
}
```


#### breakpoint mixin 
```
.page-wrap {
  width: 75%;
  @include breakpoint(large) { width: 60%; }
  @include breakpoint(medium) { width: 80%; }
  @include breakpoint(small) { width: 95%; }
}
```

#### retina images
```
div.logo {
   background: url("logo.png") no-repeat;
   @include image-2x("logo2x.png", 100px, 25px);
 }
```

#### retina, png, svg background image fallback
```
body {
  @include background-image('pattern');
}
```


#### clearfix
```
.article {
     @include clearfix();
}
```

#### border radius

```
.button {
  @include border-radius(5px);
}
```

```
// Single side border-radius
.submit-button {
  @include border-top-radius(10px);
  @include border-right-radius(8px);
  @include border-bottom-radius(10px);
  @include border-left-radius (6px);
}
```

#### opacity
```
.article-heading {
  @include opacity(0.8);
}
```

#### center block
```
.footer-wrap {
  width: 450px;
  @include center-block;
}
```

#### absolute position
```
.abs {
  @include abs-pos(10px, 10px, 5px, 15px);
}
```

#### line height
```
body {
  @include line-height (16);
}
```

#### animations and keyframes
```
@include keyframes(slide-down) {
  0% { opacity: 1; }
  90% { opacity: 0; }
}

.element {
  width: 100px;
  height: 100px;
  background: black;
  @include animation('slide-down 5s 3');
}
```

#### transitions


#### Form pseudo elements
This isn't as much a true mixin as it is a plugin for sass. 

```
$pseudo-phprefix: "::-webkit-input-placeholder" "::-moz-placeholder" ":-ms-input-placeholder" "::placeholder";

$ph-styles: (
  font-family: $type-body,
  font-size: medium,
  font-style: normal,
  font-weight: normal,
  color: inherit,
  letter-spacing : normal,
  line-height: normal,
  text-align: inherit,
  text-decoration: inherit,
  padding: 0
);

@mixin placeholder-theme($styles) {
  @each $pseudo in $pseudo-phprefix {

    @at-root #{&}#{$pseudo} {
      @each $key, $value in $styles {
        #{$key}: #{$value};
      }
    }

  }
}

@mixin placeholder {
  @each $pseudo in $pseudo-phprefix {

    @at-root #{&}#{$pseudo} {
      @content
    }

  }
}
```