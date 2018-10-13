const express = require("express")

const { Page } = require("../db")
const c = require("./constants")

// pageRouter controls endpoints that manage the page resource
const pageRouter = express.Router()

/**
 * GET /page returns a list of all pages
 * @returns list of all Pages in the databsae
 * @throws 500 on error
 */
pageRouter.get("/page", getAllPages)

function getAllPages(req, res) {
  Page.find()
    .then(pages => {
      return res.json(pages)
    })
    .catch(err => {
      return res.status(c.StatusInternalError).send(err)
    })
}

/**
 * GET /page/:slug returns the page that contains a matching slug
 * @returns Page in response body if found
 * @throws 404 if page not found or 500 on error
 */
pageRouter.get("/page/:slug", getPageWithSlug)

function getPageWithSlug(req, res) {
  Page.findOne({ slug: req.params.slug })
    .then(page => {
      // If page doesn't exist, return not found
      if (!page) {
        return res.status(c.StatusNotFound).send(c.MessageNotFound)
      }

      return res.json(page)
    })
    .catch(err => {
      return res.status(c.StatusInternalError).send(err)
    })
}

/**
 * POST /page creates a page given a page in the request body
 * @returns 200 on successful creation
 * @throws 500 on error
 */
pageRouter.post("/page", createPage)

function createPage(req, res) {
  let slug = req.body.slug
  if (!slug) {
    return res.status(c.StatusInternalError).send("Missing slug")
  }

  // Check if page with the proposed slug already exists before creating
  Page.findOne({ slug })
    .then(page => {
      if (page) {
        return res.status(c.StatusInternalError).send("Page with this slug already exists!")
      }

      let newPage = new Page(req.body)

      newPage
        .save()
        .then(() => {
          return res.send(c.MessageOK)
        })
        .catch(err => {
          return res.status(c.StatusInternalError).send(err)
        })
    })
    .catch(err => {
      return res.status(c.StatusInternalError).send(err)
    })
}

/**
 * PUT /page/:slug updates the page with the given slug
 * It expects the full page to be given in the request body
 * @returns 200 on successful update
 * @throws 500 on error
 */
pageRouter.put("/page/:slug", updatePageWithSlug)

function updatePageWithSlug(req, res) {
  // TODO: Implement this
  return res.send(c.MessageOK)
}

/**
 * DELETE /page/:slug deletes the page with the given slug
 * @returns 200 on successful delete
 * @throws 404 on not found
 */
pageRouter.delete("/page/:slug", deletePageWithSlug)

function deletePageWithSlug(req, res) {
  Page.deleteOne({ slug: req.params.slug })
    .then(() => {
      return res.send(c.MessageOK)
    })
    .catch(err => {
      return res.status(c.StatusInternalError).send(err)
    })
}

module.exports = pageRouter
