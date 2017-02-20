#_theme scss files
This directory holds the SMACS theme files.

*Theme rules are similar to state rules in that they describe how modules or layouts might look. Most sites don’t require a layer of theming but it is good to be aware of it. Themes can affect any of the primary types. They can override base styles like default link colours. They can change module elements such as colours and borders. They can affect layout with different arrangements. They can also alter how states look.*

To learn more, I highy recommend reading [Jonathan Snook's SMACSS Book](https://smacss.com/)

###Note:###
I tend to use this directory for managing site wide changes. For instance _loggedin.scss might be a file I add to update the site based on if you are signed in or not.  You may also have a project that has seasonal changes so you can create a _autumn.scss or _summer.scss file that will override the normal site styles.