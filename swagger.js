const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Office Appointment',
        version: '1.0.0',
        description: 'Group 13',
      },
      components: {
        securitySchemes: {
          BearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
          },
        },
      },
    },
    apis: ['./index.js', './routes/*.js'], // Specify the paths
  };
  
  const specs = swaggerJsdoc(options);
  
  module.exports = { swaggerUi, specs };

/**
 * @swagger
 * /register-staff:
 *   post:
 *     summary: Register a staff member
 *     tags:
 *       - Staff
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Staff registered successfully
 *       403:
 *         description: Invalid or unauthorized token
 *       409:
 *         description: Username already exists
 *       500:
 *         description: Error registering staff
 */

/**
 * @swagger
 * /register-security:
 *   post:
 *     summary: Register a security member
 *     tags:
 *       - Security
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Security registered successfully
 *       409:
 *         description: Username already exists
 *       500:
 *         description: Error registering security
 */


/**
 * @swagger
 * /login-staff:
 *   post:
 *     summary: Staff login
 *     tags:
 *       - Staff
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successful login. Returns a JWT token.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *       401:
 *         description: Invalid credentials
 *       500:
 *         description: Error storing token
 */

/**
 * @swagger
 * /login-security:
 *   post:
 *     summary: Security login
 *     tags:
 *       - Security
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successful login. Returns a JWT token.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *       401:
 *         description: Invalid credentials
 *       500:
 *         description: Error storing token
 */

/**
 * @swagger
 * /appointments:
 *   post:
 *     summary: Create an appointment
 *     tags:
 *       - Appointments
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               company:
 *                 type: string
 *               purpose:
 *                 type: string
 *               phoneNo:
 *                 type: string
 *               date:
 *                 type: string
 *                 format: date
 *               time:
 *                 type: string
 *                 format: time
 *               verification:
 *                 type: boolean
 *               staff:
 *                 type: object
 *                 properties:
 *                   username:
 *                     type: string
 *     responses:
 *       200:
 *         description: Appointment created successfully
 *       403:
 *         description: Invalid or unauthorized token
 *       500:
 *         description: Error creating appointment
 */

/**
 * @swagger
 * /staff-appointments/{username}:
 *   get:
 *     summary: Get appointments for a staff member
 *     tags:
 *       - Appointments
 *     parameters:
 *       - name: username
 *         in: path
 *         description: Staff member's username
 *         required: true
 *         type: string
 *       - name: Authorization
 *         in: header
 *         description: JWT token for authentication
 *         required: true
 *         type: string
 *         format: Bearer {token}
 *     responses:
 *       200:
 *         description: List of staff appointments
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/definitions/Appointment'
 *       403:
 *         description: Invalid or unauthorized token
 *       500:
 *         description: Error retrieving appointments
 */

/**
 * @swagger
 * /appointments/{name}:
 *   put:
 *     summary: Update appointment verification by visitor name
 *     tags:
 *       - Appointments
 *     parameters:
 *       - name: name
 *         in: path
 *         description: Visitor's name
 *         required: true
 *         type: string
 *       - in: header
 *         name: Authorization
 *         description: Bearer token for authentication
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               verification:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Appointment verification updated successfully
 *       403:
 *         description: Invalid or unauthorized token
 *       404:
 *         description: Appointment not found
 *       500:
 *         description: Error updating appointment verification
 */

/**
 * @swagger
 * /appointments/{name}:
 *   delete:
 *     summary: Delete an appointment by visitor name
 *     tags:
 *       - Appointments
 *     parameters:
 *       - name: name
 *         in: path
 *         description: Visitor's name
 *         required: true
 *         type: string
 *       - in: header
 *         name: Authorization
 *         description: Bearer token for authentication
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Appointment deleted successfully
 *       403:
 *         description: Invalid or unauthorized token
 *       500:
 *         description: Error deleting appointment
 */

/**
 * @swagger
 * /logout:
 *   post:
 *     summary: Logout
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               role:
 *                 type: string
 *     responses:
 *       200:
 *         description: Logged out successfully
 *       403:
 *         description: Invalid or unauthorized token
 *       500:
 *         description: Error logging out
 */
