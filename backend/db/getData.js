const client = require("../config/db.config");

async function getUserData(email, password) {
    try {
        const query = `
            SELECT
                u.name AS user_name,
                r.role AS role_name,
                array_agg(sr.page_id) AS pages_ids
            FROM
                "users" u
            JOIN
                "userrole" ur ON u.id = ur.user_id
            JOIN
                "roles" r ON ur.role_id = r.id
            JOIN
                "pagerole" sr ON ur.role_id = sr.role_id
            WHERE
                u.email = $1
                AND u.password = $2
            GROUP BY
                u.name, r.role;
    `;

        const { rows } = await client.query(query, [email, password]);
        console.log("rows", rows)

        return rows[0];
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
}

module.exports = getUserData;
