class ApiFeatures {
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr;
    }

    search() {
        const keyword = this.queryStr.keyword
            ? {
                exactLocationName: {
                    $regex: this.queryStr.keyword,
                    $options: "i",
                },
            }
            : {};
        console.log(keyword);
        this.query = this.query.find({ ...keyword });
        return this;
    }
    limit() {
        const limit = parseInt(this.queryStr.limit) || 20; // Default limit to 10 if not provided
        this.query = this.query.limit(limit);
        return this;
    }
    pagination(resultPerPage) {
        const currentPage = Number(this.queryStr.page) || 1;
        const skip = resultPerPage * (currentPage - 1);
        this.query = this.query.limit(resultPerPage).skip(skip);
        return this;
    }
}

module.exports = ApiFeatures;