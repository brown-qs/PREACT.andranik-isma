import { Fragment, FunctionalComponent, h } from 'preact'
import useAllTags from '../hooks/useAllTags'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import MoreVert from '@material-ui/icons/MoreVert'

const PopularTags: FunctionalComponent = () => {
  const { tags } = useAllTags()

  return (
    <Fragment>
      <div className="card">
        <div className="card-header">
          <b>Program/Comment Search</b>
        </div>
        <div className="card-block">
          <fieldset className="form-group">
            <label>Word</label>
            <input
              type="email"
              className="form-control form-control-sm"
              placeholder="Enter Word for Search"
            />
          </fieldset>
          <hr />
          <fieldset className="form-group">
            <label>Languages</label>
            <select
              size={0}
              className="form-control form-control-sm"
              id="inputGroupSelect01"
            >
              <option selected>ALL</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </fieldset>
          <fieldset className="form-group">
            <label>Program Type</label>
            <select
              size={0}
              className="form-control form-control-sm"
              id="inputGroupSelect01"
            >
              <option selected>ANY</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </fieldset>
          <fieldset className="form-group">
            <label>Program Stage</label>
            <select
              size={0}
              className="form-control form-control-sm"
              id="inputGroupSelect01"
            >
              <option selected>ANY</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </fieldset>
          <hr />
          <fieldset className="form-group">
            <label>Search Text in Program Body</label>
            <input
              type="email"
              className="form-control form-control-sm"
              placeholder="Enter text of Program Body"
            />
          </fieldset>
          <hr />
          <fieldset className="form-group">
            <label>Search Text in Comment Body</label>
            <input
              type="email"
              className="form-control form-control-sm"
              placeholder="Enter text of Comment Body"
            />
          </fieldset>
          <Button size="small" color="primary" startIcon={<MoreVert/>}>
            Advanced Search
          </Button>
          <Box mt={3} mb={1}>
            <Button variant="outlined" size="small" color="primary" fullWidth>
              Clear Inputs
            </Button>
          </Box>
          <Button variant="contained" size="small" color="primary" fullWidth>
            Search
          </Button>
        </div>
      </div>
    </Fragment>
  )
}

export default PopularTags
