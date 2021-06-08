import React from "react";
import "./service.css";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import tileData from "./tileData";
import Fade from "react-reveal/Fade";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 1700,
    height: 2820,
    textAlign: "center",
    "&:hover": {
      filter: "none",
    },
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
function Service(props) {
  const classes = useStyles();

  const getGridListCols = () => {
    // if (isWidthUp("xm", props.width)) {
    //   return 1;
    // }

    // if (isWidthUp("xs", props.width)) {
    //   return 1;
    // }

    if (isWidthUp("lg", props.width)) {
      return 2;
    }

    return 1;
  };

  return (
    <div className="bg-styles">
      <div className={classes.root}>
        <Fade>
          <GridList
            cellHeight={700}
            className={classes.gridList}
            cols={getGridListCols()}
          >
            {tileData.map((tile) => (
              <GridListTile key={tile.img}>
                <img src={tile.img} alt={tile.title} />
                <GridListTileBar title={tile.title} />
              </GridListTile>
            ))}
          </GridList>
        </Fade>
      </div>
    </div>
  );
}

export default withWidth()(Service);
