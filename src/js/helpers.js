// Helper function for HTTP requests
export function makeRequest(type, url, data, success, error) {
	const baseURI = 'http://apitest.icfrog.com/api';

	$.ajax({
		url: baseURI + url,
		type: type,
		data: data,
		contentType: "application/x-www-form-urlencoded",
		success: (data) => {
			success(data);
		},
		error: (xhr, status, err) => {
			if (error) 
				error();
		}
	});
};

